import React from "react";
import "./styles/Icons.scss";

import MdPhonePortrait from "react-ionicons/lib/MdPhonePortrait";
import MdMail from "react-ionicons/lib/MdMail";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoHtml5 from "react-ionicons/lib/LogoHtml5";
import LogoCss3 from "react-ionicons/lib/LogoCss3";
import LogoJavascript from "react-ionicons/lib/LogoJavascript";
import LogoSass from "react-ionicons/lib/LogoSass";

function MailIcon(props) {
  return (
    <MdMail
      className="Icon"
      fontSize="30px"
      color="#92d4b1"
      style={{
        gridRow: `${props.row}`,
        gridColumn: `${props.col}`
      }}
    />
  );
}

function PhoneIcon(props) {
  return (
    <MdPhonePortrait
      className="Icon"
      fontSize="30px"
      color="#92d4b1"
      style={{
        gridRow: `${props.row}`,
        gridColumn: `${props.col}`
      }}
    />
  );
}

function GithubIcon(props) {
  return (
    <LogoGithub
      className="Icon"
      fontSize="30px"
      color="#92d4b1"
      style={{
        gridRow: `${props.row}`,
        gridColumn: `${props.col}`
      }}
    />
  );
}

function TwitterIcon(props) {
  return (
    <LogoTwitter
      className="Icon"
      fontSize="30px"
      color="#92d4b1"
      style={{
        gridRow: `${props.row}`,
        gridColumn: `${props.col}`
      }}
    />
  );
}

function LinkedinIcon(props) {
  return (
    <LogoLinkedin
      className="Icon"
      fontSize="30px"
      color="#92d4b1"
      style={{
        gridRow: `${props.row}`,
        gridColumn: `${props.col}`
      }}
    />
  );
}

function HtmlIcon() {
  return (
    <LogoHtml5
      className="S3-icon-dev S3-icon-dev-Html"
      fontSize="60px"
      color="white"
    />
  );
}
function CssIcon() {
  return (
    <LogoCss3
      className="S3-icon-dev S3-icon-dev-Css"
      fontSize="60px"
      color="white"
    />
  );
}
function JSIcon() {
  return (
    <LogoJavascript
      className="S3-icon-dev S3-icon-dev-JS"
      fontSize="60px"
      color="white"
    />
  );
}

function SassIcon() {
  return (
    <LogoSass
      className="S3-icon-dev S3-icon-dev-Sass"
      fontSize="60px"
      color="white"
    />
  );
}

export {
  PhoneIcon,
  MailIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  HtmlIcon,
  CssIcon,
  JSIcon,
  SassIcon
};
