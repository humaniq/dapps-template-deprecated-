import dayjs from "dayjs"
import React from "react"

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer-text">
        Humaniq dApps React Boilerplate © { dayjs().year() }
      </span>
    </div>
  )
}

export default Footer