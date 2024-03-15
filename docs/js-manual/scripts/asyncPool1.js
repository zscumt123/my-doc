async function asyncPool(poolLimit, tasks) {
  let ret = [];
  let executing = new Set();
  for (const taskItem of tasks) {
    const p = Promise.resolve().then(() => taskItem);
    ret.push(p);
    executing.add(p);
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);
    if (executing.size >= poolLimit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(ret);
}

const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(time), time));

const tasks = [
  sleep(1000),
  sleep(6000),
  sleep(3000),
  sleep(2000),
]

asyncPool(2, tasks).then(res => {
  console.log(res)
})
