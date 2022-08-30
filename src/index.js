/**
 * Todo type
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
 * @callback removeAll
 * @returns {boolean}
 */

/**
 * 할일 생성
 * @constructor
 * @param {string} element
 * @param {onCreate} callback
 * @param {removeAll} removeAll
 */

function TodoItem(element, onCreate, removeAll) {}
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
TodoItem.prototype.onCreate = function (text, category, tags) {};
/**
 * 할일 전체 삭제
 */
TodoItem.prototype.removeAll = function () {};

/**
 * 할일 리스트
 * @constructor
 */
function TodoList() {}
