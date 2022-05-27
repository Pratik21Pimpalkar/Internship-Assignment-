import { Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ticket from "../Assets/Images/Ticket.svg";
import ticketHover from "../Assets/Images/TicketHover.svg";
const subtitle = {
  display: "inline-block",
  fontWeight: "600",
  margin: "0.3rem 0 ",
  padding: "0.1rem 0.3rem",
  fontSize: "0.75rem",
  backgroundColor: "#E5C558",
  color: "#682F26",
  fontFamily: "Nunito, serif",
  borderRadius: "0.1rem",
};
const ticketStyling = {
  display: "flex",
  position: "absolute",
  right: "0.625rem",
  bottom: "0",
  borderLeft: "2px #ffffff1a solid",
  paddingLeft: "1rem",
};
const title = {
  margin: "0.5rem 0",
  color: "#fff",
  fontFamily: "Libre Baskerville, serif",
  fontSize: "1.25rem",
};
const gradient = {
  boxShadow: " 0px 4px 16px rgba(0, 0, 0, 0.85)",
  height: "24rem",
  width: "16.75rem",
  borderRadius: "0.5rem",
  position: "relative",
  background: "linear-gradient(163.41deg, #301A68 0.11%, #234C97 170.69%)",
};
const moreInfo = {
  fontFamily: "Nunito, serif",
  color: "#0259EB",
  fontWeight: "600",
  fontSize: "1rem",
  position: "relative",
  cursor: "pointer",
};
const cardWrapper = {
  width: "100%",
  height: "100%",
  borderRadius: "0.5rem",
  position: "absolute",
  right: "0.5rem",
  top: "0.5rem",
};
const ShowsCard = ({data}) => {
  const [over, setOver] = useState(false);

  return (
    <>
      <div style={gradient}>
        <div style={cardWrapper}>
          <div style={{ width: "100%", display: "flex" }}>
            <img src={data.img} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
          <div style={{ backgroundColor: "#111229", padding: "1rem" }}>
            <div>
              <span style={subtitle}>{data.tag}</span>
              <Typography variant="h5" style={title}>
                {data.name}
              </Typography>
            </div>
            <div style={{ margin: "1.7rem 0px 0.81rem 0" }}>
              <Typography variant="body2" style={moreInfo}>
                More Info
                <span style={{ position: "absolute", marginLeft: "0.21rem" }}>
                  <ArrowForwardIcon />
                </span>
                <span style={ticketStyling}>
                  <img
                    src={over ? ticketHover : ticket}
                    alt="ticket"
                    onMouseOver={() => setOver(true)}
                    onMouseOut={() => setOver(false)}
                  />
                </span>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowsCard;
