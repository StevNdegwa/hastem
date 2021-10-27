import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";

describe("Test <App/>", () => {
  let wrapper: ShallowWrapper | null;

  beforeEach(() => wrapper = shallow(<App />));

  test("Has the text 'Application'", () => {
    expect(wrapper?.text()).toEqual("Application");
  })
});
