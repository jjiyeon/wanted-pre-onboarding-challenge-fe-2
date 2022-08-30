/**
 * Todo 할일 type
 * @typedef {Object} Todo
 * @property {number} id - id
 * @property {string} text - 할일
 * @property {boolean} isCompleted - 완료 여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 해시태그
 */

/**
 * Todo Item type
 * @typedef {Object} Item
 * @property {string} text - 할일
 * @property {boolean} isCompleted - 완료 여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 해시태그
 */

/**
 * todoApp
 * @constructor
 */
function TodoApp() {}
TodoApp.prototype.setState = function (state) {};

/**
 * 할일 생성 콜백함수
 * @callback onCreate
 * @returns {Todo}
 */
/**
 * 할일 삭제 콜백함수
 * @callback deleteAll
 * @returns {boolean}
 */

/**
 * 할일 생성
 * @constructor
 * @param {string} element
 * @param {onCreate} callback
 * @param {deleteAll} removeAll
 */

function TodoItem(element, onCreate, deleteAll) {}
/**
 * 할일 컴포넌트를 render 함수
 */
TodoItem.prototype.render = function () {};
/**
 * 할일 추가
 * @param {string} text
 * @param {string} category
 * @param {string[]} tags
 */
TodoItem.prototype.todoCreate = function (text, category, tags) {};
/**
 * 할일 전체 삭제
 */
TodoItem.prototype.deleteAll = function () {};

/**
 * 전체 할일 리스트 가져오기
 * @callback getList
 * @returns {Todo[]}
 */
/**
 * 특정 id 할일 삭제
 * @callback onDelete
 * @returns {boolean}
 */
/**
 * 특정 id 할일/태그 수정(삭제)
 * @callback onUpdate
 * @returns {Todo}
 */

/**
 * 할일 리스트
 * @constructor
 * @param {Todo[]} todoList
 * @param {onDelete} onDelete
 * @param {onUpdate} onUpdate
 */
function TodoList(todoList, onDelete, onUpdate) {}
/**
 * 할일 리스트 그리기
 * @param {Todo[]} todoList
 */
TodoList.prototype.render = function (todoList) {};
/**
 * 특정 id 할일/태그 수정
 * @param {number} todoId
 */
TodoList.prototype.todoUpdate = function (todoId) {};
/**
 * 특정 id 할일 삭제
 * @param {number} todoId
 */
TodoList.prototype.todoDelete = function (todoId) {};
