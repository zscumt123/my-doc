# 数据库锁

## 全局锁
> 对整个数据库加锁
```sql
-- 让整个数据库处于只读的状态
FLUSH TABLES WITH READ LOCK ;
```

## 表锁 
