import './test_suites/AllPlants.test'
import './test_suites/CreatePlant.test'
import './test_suites/InStock.test'
import './test_suites/SearchPlants.test'

// Set up fetch mock
beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(global.basePlants),
      })
    );
  });
  
  afterEach(() => {
    global.fetch.mockClear();
  });