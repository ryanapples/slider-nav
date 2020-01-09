import React from "react";
import SelectedCityContext from "../context/SelectedCityContext";
import SelectedCityTime from "../components/SelectedCityTime";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCity: null,
      sizes: {}
    };

    // Nav Item Ref Object
    this.navItemRefs = {};
  }

  componentDidMount() {
    this.getRectSizes();
  }

  getRectSizes() {
    const navElementRect = this.navRoot.getBoundingClientRect();
    const sizes = {};

    Object.keys(this.navItemRefs).forEach(key => {
      const element = this.navItemRefs[key];
      const elementRect = element.getBoundingClientRect();

      const leftPosition = elementRect.left - navElementRect.left;
      const rightPosition = navElementRect.right - elementRect.right;

      sizes[key] = { leftPosition, rightPosition };
    });

    this.setState({ sizes });
    return sizes;
  }

  onNavItemClick = city => {
    this.setState({ activeCity: city });
  };

  renderNavItems() {
    return React.Children.map(this.props.children, (child, i) => {
      let className =
        child.key === this.state.activeCity
          ? "navigation__city--active"
          : "navigation__city";
      return (
        <li
          className={className}
          onClick={() => this.onNavItemClick(child.key)}
          ref={el => (this.navItemRefs[child.key] = el)}
        >
          {child}
        </li>
      );
    });
  }

  onResize() {
    if (this.state.activeCity === null) {
      return;
    }

    const sizeValue = this.state.sizes[this.state.activeCity];
    return {
      left: `${sizeValue.leftPosition}px`,
      right: `${sizeValue.rightPosition}px`
    };
  }

  render() {
    return (
      <SelectedCityContext.Provider value={this.state.activeCity}>
        <nav className="navigation">
          <ul className="navigation__city-list" ref={el => (this.navRoot = el)}>
            {this.renderNavItems()}
            <div
              className="navigation__underline"
              style={this.onResize()}
            ></div>
          </ul>
        </nav>
        <SelectedCityTime activeCity={this.state.activeCity} />
      </SelectedCityContext.Provider>
    );
  }
}

export default Nav;
