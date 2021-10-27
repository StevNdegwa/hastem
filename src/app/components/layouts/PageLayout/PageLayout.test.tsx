import { shallow, ShallowWrapper } from "enzyme";
import PageLayout from "./PageLayout";

describe("Test <PageLayout/>", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = shallow(<PageLayout />)));

  test("A header element is present", () => {
    expect(wrapper.find("header")).toHaveLength(1);
  });

  test("The header element contains the node passed in 'header' prop", () => {
    let header = "Header Content";
    expect(wrapper.find("header").text()).toEqual("");
    wrapper.setProps({ header });
    expect(wrapper.find("header").text()).toEqual(header);
  });

  test("A main element is present", () => {
    expect(wrapper.find("main")).toHaveLength(1);
  });

  test("The main element contains the node passed in 'main' prop", () => {
    let main = "Main content";
    expect(wrapper.find("main").text()).toEqual("");
    wrapper.setProps({ main });
    expect(wrapper.find("main").text()).toEqual(main);
  });

  test("A footer element is present", () => {
    expect(wrapper.find("footer")).toHaveLength(1);
  });

  test("The footer element contains the node in 'footer' prop", () => {
    let footer = "Footer Content";
    expect(wrapper.find("footer").text()).toEqual("");
    wrapper.setProps({ footer });
    expect(wrapper.find("footer").text()).toEqual(footer);
  });
});
