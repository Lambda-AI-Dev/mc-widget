import React from "react";
import ImageIcon from "./ImageIcon";

const ImageGrid = ({ testImg }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <ImageIcon url={testImg} />
          </td>
          <td>
            <ImageIcon url={testImg} />
          </td>
          <td>
            <ImageIcon url={testImg} />
          </td>
        </tr>
        <tr>
          <td>
            <ImageIcon url={testImg} />
          </td>
          <td>
            <ImageIcon url={testImg} />
          </td>
          <td>
            <ImageIcon url={testImg} />
          </td>
        </tr>
        <tr>
          <td>
            <ImageIcon url={testImg} />
          </td>
          <td>
            <ImageIcon url={testImg} />
          </td>
          <td>
            <ImageIcon url={testImg} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ImageGrid;
