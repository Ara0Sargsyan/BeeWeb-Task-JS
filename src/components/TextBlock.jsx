import { Button, Card, CardActions, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import CostomEditor from "./CustomEditor";

const TextBlock = ({ block, deleteTextBlock }) => {
  const deleteblock = () => {
    deleteTextBlock(block.id);
  };

  return (
    <Box
      sx={{
        padding: "15px",
      }}
    >
      <Card sx={{ width: "400px" }}>
        <CardContent>
          <CostomEditor initialValue={block.value} />
        </CardContent>
        <CardActions sx={{ bgcolor: "WhiteSmoke", display: "flex" }}>
          <Button
            sx={{ flexGrow: 1, color: "crimson" }}
            onClick={deleteblock}
            variant="text"
            size="small"
          >
            delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default TextBlock;
