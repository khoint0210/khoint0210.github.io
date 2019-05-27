/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();
mingyan.push("{'index':0,'content':'It doesn’t matter who you are, where you come from.</br> The ability to triumph begins with you.</br> Always.</br> - Oprah Winfrey</br>'}");
mingyan.push("{'index':1,'content':'It doesn’t matter who you are, where you come from.</br> The ability to triumph begins with you.</br> Always.</br> - Oprah Winfrey</br>'}");
mingyan.push("{'index':3,'content':'I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.</br> - Og Mandino</br>'}");
mingyan.push("{'index':4,content: 'Courage, dear heart.</br> – C.S. Lewis </br>'}");
mingyan.push("{'index':5,content: 'In the middle of difficulty lies opportunity.</br> – Albert Einstein </br>'}");
mingyan.push("{'index':6,content: 'It doesn’t matter how slow you go as long as you don’t stop.</br> – Confucius </br>'}");
mingyan.push("{'index':7,content: 'He who has a why to live can bear almost any how.</br> – Friedrich Nietzsche </br>'}");
mingyan.push("{'index':8,content: 'Believe you can and you’re halfway there.</br> – Theodore Roosevelt </br>'}");
mingyan.push("{'index':9,content: 'The only person you are destined to become is the person you decide to be.</br> – Ralph Waldo Emerson </br>'}");
mingyan.push("{'index':10,content: 'Anything’s possible if you’ve got enough nerve.</br> – J.K. Rowling </br>'}");
mingyan.push("{'index':11,content: 'The secret of health for both mind and body is not to mourn for the past, not to worry about the future, but to live the present moment wisely and earnestly.</br> – Buddha </br>'}");
mingyan.push("{'index':12,content: 'A bird doesn’t sing because it has an answer, it sings because it has a song.</br> – Maya Angelou </br>'}");
mingyan.push("{'index':13,content: 'And you ask ‘What if I fall?’ Oh but my darling, what if you fly?</br> – Erin Hanson </br>'}");

/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
// function getMingYanHref(){
//   var item = getItem();
//   return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
// }

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
}