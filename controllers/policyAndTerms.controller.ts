// render the two pages: policy and terms
// *************************************************************************************************
import { Request, Response } from 'express';


export const getPolicy = async (req: Request, res: Response) => {
    res.render('policyAndPrivacy');
  };
 
export const getTerms = async (req: Request, res: Response) => {
    res.render('terms');
  };

  export const getIndex = async (req: Request, res: Response) => {
    res.render('index');
  };
  export const getFacebook = async (req: Request, res: Response) => {
    res.render('facebook');
  };
