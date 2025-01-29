function requestValidator(obj){
  const method = ['GET', 'POST', 'DELETE', "CONNECT"];
  const versionValidation = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

  let uri = /[^A-Za-z0-9\.\*]+/;
  let msgPattern = /[<>\\\&\'\"]+/;

  if ((obj.method === undefined) || (!method.includes(obj.method))){
    throw new Error('Invalid request header: Invalid Method')
  }
  if ((obj.uri === undefined) || obj.uri === '' || uri.test(obj.uri)){
    throw new Error('Invalid request header: Invalid URI');
  }

  if ((obj.version === undefined) || !(versionValidation.includes(obj.version))){
    throw new Error('Invalid request header: Invalid Version');
  }

  if ((obj. message === undefined) || ((msgPattern.test(obj.message)) === true)){
    throw new Error('Invalid request header: Invalid Message')
  }

  return obj
}



requestValidator({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}
  )
  
