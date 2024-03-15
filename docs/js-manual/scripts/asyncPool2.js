async function* asyncPool(concurrency,tasks) {
  const executing = new Set();
  async function consume() {
    const [promise, value] = await Promise.race(executing);
    executing.delete(promise);
    return value;
  }
  for (const task of tasks) {
    const promise = Promise.resolve(task).then(value => [promise, value]);
    executing.add(promise);
    if (executing.size >= concurrency) {
      yield await consume();
    }
  }
  while (executing.size) {
    yield await consume();
  }
}


const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(time), time));

const tasks = [
  sleep(1000),
  sleep(6000),
  sleep(3000),
  sleep(2000),
]

for await (const item of asyncPool(2, tasks)) {
  console.log(item);
}
