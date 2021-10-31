import { shallow, ShallowWrapper } from "enzyme";
import { PageLayout } from "./PageLayout";
import { Wrapper, Header, Main, Footer } from "./styles";

describe("Test <PageLayout/>", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = shallow(<PageLayout />)));

  test("contains a 'Wrapper' element", () => {
    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  test("A 'Header' element is present", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  test("The 'Header' element contains the node passed in 'header' prop", () => {
    let header = "Header Content";
    expect(wrapper.find(Header).text()).toEqual("");
    wrapper.setProps({ header });
    expect(wrapper.find(Header).text()).toEqual(header);
  });

  test("A 'Main' element is present", () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });

  test("The 'Main' element contains the node passed in 'main' prop", () => {
    let main = "Main content";
    expect(wrapper.find(Main).text()).toEqual("");
    wrapper.setProps({ main });
    expect(wrapper.find(Main).text()).toEqual(main);
  });

  test("A 'Footer' element is present", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  test("The 'Footer' element contains the node in 'footer' prop", () => {
    let footer = "Footer Content";
    expect(wrapper.find(Footer).text()).toEqual("");
    wrapper.setProps({ footer });
    expect(wrapper.find(Footer).text()).toEqual(footer);
  });
});
