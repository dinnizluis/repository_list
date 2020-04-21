import * as React from "react";

function SvgRepositories(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path fill="url(#Repositories_svg__a)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="Repositories_svg__a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.04167)" xlinkHref="#Repositories_svg__b" />
        </pattern>
        <image
          id="Repositories_svg__b"
          width={24}
          height={24}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBhYQFTqA9XEcAAABpUlEQVQ4y73US0jUURQG8J+TjlrJWLSINtZCKHJRuSsIeuzETRi4KGgRUtCDKMqFiEibVu3KNiUtchMKLXRTuCyIGCgqkkLTkZoIEXtN6cy/xX+cRzODs+qDC/cezne+wz3fvZQiolvcC10i1kStU95ZNOiGb944YV3l5HpnTFvSLwY2G7DgvdPqSpMbXZQwb1zamPZcvEmvpFnnNCgIXpM046x6tBmxYsKBf4p9ctkGiEoI9BXJtrpn2aQjuUjUoEBCHc0CM1JuaSlqssVtKU91YIc7fpsSaA4Ju3R65o+7WotI29z0y5RlTxy2J0/YCY6atOKB3TlCu1EZgQ4ICYWjeeyQg2JeGrXPfuOeoxOvC2XzCqvY66G0tBFt2CqwPa9QW2aAcV3uS+kBQXblfFMeGZnsLumY2ULvrI2xwkMVfizG/yLUVJVbExJ+SpjIOrUyGpz3yJwfrNp73iXrcwnDhnL7ja74LOmqpnyF0PNf9GaDq4SYPl/NuaCxVDZ8ogsGbDJsyBbXLfqgR7Ryr+EnsOSjad+9dbKa0UZ0eyXueLlL/wu8GXr5A2WxGgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yMlQxNjoyMTo1OCswMjowMFY4o6QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjJUMTY6MjE6NTgrMDI6MDAnZRsYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}

export default SvgRepositories;