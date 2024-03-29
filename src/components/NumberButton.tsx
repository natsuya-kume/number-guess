import React, { FC, ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

type NumberButtonProps = {
  onClick(): void;
  children: ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const NumberButton: FC<NumberButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={props.onClick}>
        {props.children}
      </Button>
    </div>
  );
};
export default NumberButton;
