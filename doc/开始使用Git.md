## 开始使用 Git

_现在的前端工作和学习都离不开 git 的使用，所以学好 git 是当务之急的事情。_

### 基础命令

- clone
- add
- commit
- push
- pull
- mergin

#### clone

```bash
git clone git@xxxxxxxx.git
```

`clone`一个库到本地（通常当给你分派任务后，会告诉你一个当前项目的 git 地址。所以你做的的第一件事就是把服务器上的代码`clone`到本地）

> 我们将本地 git 环境分为三个部分：工作目录、暂存区、本地仓库或者叫 HEAD 区

#### add

```bash
git add xxx.js
git add *
```

把你的修改内容提交到暂存区，`*` 代表所有的修改，你也可以只添加某个文件: `git add index.js`

#### commit

```bash
git commit -m "代码提交信息"
```

把你的修改内容提交到本地仓库

#### push

```bash
git push origin master
```

把本地仓库的内容（就是你 commit 的内容）提交到远程仓库

> master 代表你提交的远程库的分支，可以修改为任意你需要提交到的分支

> `git remote add origin <server>` 此命令可以修改本地仓库对应的远程仓库地址

#### pull

```bash
git pull origin master
```

拉去远程库的 master 分支到本地

> 大多数情况下，这你是明天早上上班的时候做的第一件事

### 小练习

1 在本地初始化一个 git 目录
2 尝试新增、修改、删除文件并提交到远程仓库
3 基于主分支在本地创建新的分支 A，添加一些修改内容，并提交到远程仓库同名分支
4 基于主分支在本地创建新分支 B，添加一些修改内容，提交到缓存区，合并远程仓库 B 分支内容，推送到远程仓库 B 分支。

> 思考问题：git 有几种合并分支的操作，分别有什么区别

### 参考资料

http://www.ruanyifeng.com/blog/2014/06/git_remote.html  
http://www.runoob.com/git/git-tutorial.html
