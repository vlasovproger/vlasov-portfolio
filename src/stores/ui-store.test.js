import UiStore from "./ui-store";

describe("UiStore", () => {
  it("Should toggle menu", () => {
    const store = new UiStore();
    expect(store.menuIsOpened).toBeFalsy();
    store.toggleMenuButton();
    expect(store.menuIsOpened).toBeTruthy();
  });
});
