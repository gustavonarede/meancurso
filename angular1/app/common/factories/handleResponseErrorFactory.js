(function(){
  angular.module('primeiraApp').factory('handleResponseError',[
    '$q',
    '$window',
    'consts',HandleResponseErrorFactory
  ])
  function HandleResponseErrorFactory($q,$window, consts){
    function responseError(errorResponse){
      if(errorResponse.status === 403){
        localStorage.removeItem(consts.userKey)
        $window.location.href = '/'
      }
      return $1.reject(errorResponse)
    }
    return { responseError}
  }
})()
