import { registerTemplate } from "lwc";

function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    t: api_text,
    d: api_dynamic,
    k: api_key,
    h: api_element,
    i: api_iterator,
    f: api_flatten
  } = $api;
  return [
    api_element(
      "section",
      {
        key: 2
      },
      api_flatten([
        api_iterator($cmp.items, function(item) {
          return [
            api_element(
              "p",
              {
                key: api_key(4, item.id)
              },
              [api_text("1"), api_dynamic(item)]
            ),
            api_element(
              "p",
              {
                key: api_key(5, item.secondId)
              },
              [api_text("2"), api_dynamic(item)]
            )
          ];
        }),
        api_element(
          "p",
          {
            key: 6
          },
          [api_text("3"), api_dynamic($cmp.item)]
        )
      ])
    )
  ];
}

export default registerTemplate(tmpl);
tmpl.stylesheets = [];
