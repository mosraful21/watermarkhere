import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqItem = ({ faq }) => {
    return (
        <div className="faq-item">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {faq.question}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
export default FaqItem;