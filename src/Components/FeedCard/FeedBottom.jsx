import React, { useState, useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import FeedReactions from "./FeedReactions";
import FeedComments from "./FeedComments";

export default function FeedBottom({ showComment, setShowComment, theme, comments }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(showComment);
  }, [showComment]);

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary className="summary">
        <FeedReactions
          theme={theme}
          showComment={showComment}
          setShowComment={setShowComment}
        />
      </AccordionSummary>
      <AccordionDetails>
        <FeedComments comments={comments} />
      </AccordionDetails>
    </Accordion>
  );
}
