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

# 远程连接mongodb

https://segmentfault.com/q/1010000007235344


# 


[mongodb-org] 
name=MongoDB Repository 
baseurl=http://mirrors.aliyun.com/mongodb/yum/redhat/7Server/mongodb-org/4.0/x86_64/
gpgcheck=0 
enabled=1