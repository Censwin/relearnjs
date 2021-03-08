#  redux-thunk 中间件

redux 的单向数据流是同步操作，dispatch 派发出去的action对象到store后，同步分配给所有reducer，而每个reducer又是纯函数，返回后又被同步地拿去更新store，store一更新 视图也就更新了。

从头到尾都没有执行异步操作的机会，因此需要redux-thunk作为中间件执行异步操作。



react =>redux =>React-Redux => react-router => redux-thunk