var ngBindHtmlDirective = ['$sce', function($sce) {
  return function(scope, element, attr) {
    scope.$watch($sce.parseAsHtml(attr.ngBindHtml), function(value) {
      element.html(value || '');
    });
  };
}];