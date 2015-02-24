'use strict';

setFixtures('<input type=\'text\' id=\'new-todo\'></input><ul id=\'todos\'></ul>');

describe('todo', function () {
  describe('add', function ()  {
	it("adds a todo", function () {
      todo.add('new note');
	  expect($('#todos')).toContainElement($('li'));
	  expect($('#todos > li').text()).toEqual('new note');
	});
  });
  describe('read', function() {
   it('retrieve the ')
  });
});

