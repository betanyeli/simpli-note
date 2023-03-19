/**
 * @format
 */

const asMock = {
  __INTERNAL_MOCK_STORAGE__: {},

  clear: jest.fn(_clear),

  useAsyncStorage: jest.fn((key) => {
    return {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
  }),
};

async function _clear(callback) {
  asMock.__INTERNAL_MOCK_STORAGE__ = {};

  callback && callback(null);

  return null;
}

module.exports = asMock;
