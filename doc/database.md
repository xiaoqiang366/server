# 数据库

## 启动

```bash
# 启动
mongod --dbpath=./database/db --port=27040

mongod --dbpath=./db --port=27040 --fork --logpath=log/db.log

# 命令行连接
mongo

# 查看mongo进程
ps -ef|grep mongo
kill [pid]
```
