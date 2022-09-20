const http = require('http')
const nodeRes = require('node-res')
 
http.createServer(function (req, res) {
  
  // plain text
  nodeRes.send(req, res, "Hello world")
 
  // json
  nodeRes.json(req, res, {time:"now"})
 
  // jsonp
  nodeRes.jsonp(req, res, {time:"now"}, "callback")
 
}).listen(5000)




// {
//     image:'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80'
//  },
//  {
//      image:'https://images.unsplash.com/photo-1579762715459-5a068c289fda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
//  },
//  {
//     image:'https://images.unsplash.com/photo-1633081121063-fc64ad4a793f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80'
//  },
//  {
//      image:'https://images.unsplash.com/photo-1585157603289-34f674d97504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80'
//  }