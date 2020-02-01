import React from "react";
import ImageIcon from "./ImageIcon";

const ImageGrid = ({ testImgs }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <ImageIcon url={testImgs.img1} />
          </td>
          <td>
            <ImageIcon url={testImgs.img2} />
          </td>
          <td>
            <ImageIcon url={testImgs.img3} />
          </td>
        </tr>
        <tr>
          <td>
            <ImageIcon url={testImgs.img4} />
          </td>
          <td>
            <ImageIcon url={testImgs.img5} />
          </td>
          <td>
            <ImageIcon url={testImgs.img6} />
          </td>
        </tr>
        <tr>
          <td>
            <ImageIcon url={testImgs.img7} />
          </td>
          <td>
            <ImageIcon url={testImgs.img8} />
          </td>
          <td>
            <ImageIcon url={testImgs.img9} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ImageGrid;
