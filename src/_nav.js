export default {
  items: [
    {
      title: true,
      name: 'Risk Maturity Assesment Tools',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: 'text-center'             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Home',
      url: '/home',
      icon: 'icon-home',
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-chart',
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'icon-settings',
    },
    {
      title: true,
      name: 'Manual',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '',             // optional class names space delimited list for title item ex: "text-center"
    },
      {
        name: 'Manual',
        icon: 'icon-cursor',
        children: [
          {
            name: 'RM - How to use',
            url: '/manual/how-to-use',
            icon: 'icon-map',
          },
          {
            name: 'RM - Survey',
            url: '/manual/survey',
            icon: 'icon-map',
          },
          {
            name: 'RM - Document',
            url: '/manual/document',
            icon: 'icon-map',
          },
        ]
      },
    {
      title: true,
      name: 'Assesment',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Survey',
      url: '/assesment/survey',
      icon: 'icon-note',
    },
    {
      name: 'FGD / Interview',
      url: '/assesment/fgd',
      icon: 'icon-people',
    },
    {
      name: 'Observasi & Review',
      url: '/assesment/observasi-review',
      icon: 'icon-check',
    },
    {
      title: true,
      name: 'Master',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Indicators',
      url: '/assesment/indicator',
      icon: 'fa fa-map-pin',
    },
    {
      name: 'Questions',
      url: '/assesment/question',
      icon: 'fa fa-question',
    },
  ],
};
