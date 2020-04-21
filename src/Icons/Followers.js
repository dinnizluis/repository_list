import * as React from "react";

function SvgFollowers(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path fill="url(#Followers_svg__a)" d="M0 0h24v24H0z" />
      <defs>
        <pattern
          id="Followers_svg__a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.04167)" xlinkHref="#Followers_svg__b" />
        </pattern>
        <image
          id="Followers_svg__b"
          width={24}
          height={24}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBhYQFivBaAItAAABvUlEQVQ4y4XSX2jNYRgH8M/+GJPNhRUSdkG5m1z4kwsXUrNmZEop5MLVVsSNEnEhFxJRLGIlf3LrSocoyoWt0GoXIs38WTErK9tO55zHxfk5Oz+ts+ept+f7Pt/v+z5935fKUeeUPuP6nTXXrNHorRD+COGdxtkEvcIrbWq1eiH0VqbPl1OwKkHN8nLqKwnWC0/KcEbYUEmwQhhWm6AaQ8LK/4fodM4hTQn+JBxI6r3C5zR9kw9CCHkPVGO7gvBMl6dC6CinLzEqDOh22ZhwHjuMJkeEMGpbueCqcCepG4wJr4Uw7qWbMkaEcG9a0C+sK6FLQvhqt+pkp9o+b2SmBR9lLSqhbuGxhZVMfCicKKEBYWfld92q4JeTFtvorjBkgVnifmJp0ZP2yuRGPQpCJGv47bSqFKdKj9vFstWw8N5hLeZpssUN2ZRrcETogzWmFBxTk2ov1566ocWkKWvhubyDM4zZUFbXGxSOw/70+5XijAmdJXRdyBRvHJS3egZBm5xc8ld3CT8sLTa+KGie0bk9sgq6LPOz/KdeFLJGUvndFdBhUpgQrk2fM8cFQyZTOeFW0t3skW+OqvtH/wtU/bHMTwM0cAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yMlQxNjoyMjo0MyswMjowMHOiTMMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjJUMTY6MjI6NDMrMDI6MDAC//R/AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
}

export default SvgFollowers;
