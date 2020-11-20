import React from "react";
import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__left-album" src="" alt="" />

        <div className="footer__left-song">
          <h4>Yeah!</h4>

          <p>Usher</p>
        </div>
      </div>

      <div className="footer__center">
        <Shuffle className="footer__center-green" />
        <SkipPrevious className="footer__center-icon" />
        <PlayCircleOutline fontSize="large" className="footer__center-icon" />
        <SkipNext className="footer__center-icon" />
        <Repeat className="footer__center-green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>

          <Grid item>
            <VolumeDown />
          </Grid>

          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
