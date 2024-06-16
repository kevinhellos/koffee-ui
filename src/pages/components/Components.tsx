import Text from "./text/Text";
import Button from "./button/Button";
import Card from "./card/Card";
import Chip from "./chip/Chip";
import Dialog from "./dialog/Dialog";
import FileUpload from "./file/FileUpload";
import Input from "./input/Input";
import Pagination from "./pagination/Pagination";
import Popper from "./popper/Popper";
import Radio from "./radio/Radio";
import Bar from "./bar/Bar";
import Table from "./table/Table";
import Tab from "./tab/Tab";
import Accordion from "./accordion/Accordion";
import Toast from "./toast/Toast";

const Components = () => {

  return (
    <>
      <div className="workarea">
        <h1 style={{ fontWeight: 500 }} className="text-center">Components</h1>
        <div className="text-center">
          <span className="chip chip-default">
            15 ready to use pre built components
          </span>
        </div>
        {/* <p className="hero-sub-text text-center">
          A collection of reusable UI components to speed up your development
        </p> */}

        <div className="component-preview">

          {/* Accordion */}
          <Accordion/>

          {/* Bar */}
          <Bar/>

          {/* Button */}
          <Button/>

          {/* Card */}
          <Card/>

          {/* Chip */}
          <Chip/>

          {/* Dialog */}
          <Dialog/>

          {/* File upload */}
          <FileUpload/>

          {/* Input */}
          <Input/>

          {/* Pagination */}
          <Pagination/>

          {/* Popper */}
          <Popper/>

          {/* Radio */}
          <Radio/>

          {/* Tab */}
          <Tab/>

          {/* Table */}
          <Table/>

          {/* Text */}
          <Text/>

          {/* Toast */}
          <Toast/>

        </div>
      </div>
    </>
  );
};

export default Components;
