import React, { useState, useEffect } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import FeedReactions from "./Reactions";
import FeedComments from "./Comments";

export default function FeedBottom({
  showComment,
  setShowComment,
  theme,
  postId,
  displayName,
}) {
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
        <FeedComments postId={postId} displayName={displayName} />
      </AccordionDetails>
    </Accordion>
  );
}
