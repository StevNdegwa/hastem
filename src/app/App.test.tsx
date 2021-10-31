import { mount, ReactWrapper } from "enzyme";
import { Global } from "@emotion/react";
import { Route, MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("Test <App/>", () => {
  let wrapper: ReactWrapper,
    routes = ["/"];

  beforeEach(
    () =>
      (wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      ))
  );

  test("contains the GlobalStyles component", () => {
    expect(wrapper.find(Global)).toHaveLength(1);
  });

  test("contains 'Router' component", () => {
    expect(wrapper.find(Router)).toHaveLength(1);
  });

  test("all routes should be configured", () => {
    let configuresRoutes = wrapper
      .find(Route)
      .map((route) => route.prop("path"));
    expect(configuresRoutes).toEqual(routes);
  });

  test("The <Login/> is renderd in '/' page", () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });
});
