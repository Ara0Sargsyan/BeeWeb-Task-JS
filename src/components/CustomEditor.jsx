import { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const CostomEditor = ({ initialValue, onChange }) => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Slate onChange={onChange} editor={editor} value={initialValue}>
      <Editable placeholder="Write text" />
    </Slate>
  );
};

export default CostomEditor;
