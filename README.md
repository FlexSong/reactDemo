# 培训计划

# 前言

提升前端人员综合能力是一个持久战，需要长时间的积累，这里记录一下大概的脉络跟方向，更多的还是靠开发人员在平时的工作跟生活中自我学习，自我突破。

# 目录

- 开始使用 Git
- 聊一聊 Node
- 走进 ES6
- 使用 webpack
- 回顾基础（HTML+CSS）
- React+React-Router
- 状态管理
- Ant-Design-Mobile
- 基于脚手架开发项目

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

### 参考资料

http://www.ruanyifeng.com/blog/2014/06/git_remote.html  
http://www.runoob.com/git/git-tutorial.html

## 聊一聊 Node
