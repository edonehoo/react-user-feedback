/* eslint-disable no-console */
import React from 'react';
import { FeedbackModal} from '@patternfly/react-user-feedback';
import { Button } from '@patternfly/react-core';
import feedbackImage from '@patternfly/react-user-feedback/dist/esm/images/rh_feedback.svg';

export const AdvancedExample: React.FunctionComponent = () => {
   const  [isOpen, setIsOpen] = React.useState<boolean>(false);
   const handleButtonClicked = () => {setIsOpen(true)}; 
   return <>
    <Button onClick={handleButtonClicked}>Show Modal</Button>
    <FeedbackModal 
        onShareFeedback={(email:string, feedback:string)=>{
            // Example of a successful callback
            console.log (`Email Address: ${email} Feedback: ${feedback}`);
            return true
        }}
        onJoinMailingList={(email:string)=>{
            // Example of am unsuccessful callback
            console.log (`Email Address: ${email}`);
            return false;
        }}
        onOpenSupportCase='http://www.redhat.com'
        onReportABug={(email:string, bug:string)=>{
            console.log (`Email Address: ${email} Bug: ${bug}`)
            return true;}}
        feedbackImg={feedbackImage}
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}/>
    </>
}