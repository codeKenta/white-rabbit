/** @jsx jsx */

import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const Wave = ({ fillColor }) => {
  return (
    <div
      sx={{
        width: '100vh',
        position: 'relative',
        marginTop: '-50px',
        marginBottom: '-20px',
      }}
    >
      <svg width='1843px' height='95px' viewBox='0 0 1843 95' version='1.1'>
        <g
          id='Page-1'
          stroke='none'
          strokeWidth='1'
          fill='none'
          fillRule='evenodd'
        >
          <path
            d='M1487.0065,-7.54951657e-14 C1535.0165,-7.50510765e-14 1585.68628,31.9675209 1623.16431,31.9675209 C1660.64235,31.9675209 1713.52062,1.96344638 1760.10627,1.96344638 C1791.16337,1.96344638 1818.79479,10.007244 1843.00051,26.0948392 L1843.00051,26.0948392 L1842.89708,94.4100532 C1655.9335,93.5673367 1490.41514,92.821336 1346.34199,92.1720512 L1346.34199,92.1720512 L1342.52851,92.154 L1338.64123,92.1720512 C1215.17672,92.7284604 1075.96338,93.3558954 921.001198,94.0543561 L921.999,94.049 L921.999317,94.0543561 L921.5,94.052 L921.001198,94.0543561 L921.001,94.049 L917.355176,94.0334236 C764.254442,93.3433538 626.589146,92.7228963 504.359289,92.1720512 L500.472,92.154 L496.658524,92.1720512 C352.585378,92.821336 187.067016,93.5673367 0.103436766,94.4100532 L8.52651283e-14,26.0948392 C24.2057273,10.007244 51.8371408,1.96344638 82.8942407,1.96344638 C129.47989,1.96344638 182.358166,31.9675209 219.836202,31.9675209 C257.314238,31.9675209 307.984019,-7.50510765e-14 355.99401,-7.54951657e-14 C404.004001,-7.54951657e-14 451.186955,38.4837532 498.378077,38.4837532 C498.921967,38.4837532 499.468242,38.4782032 500.016832,38.4672313 L500.017877,38.4418697 C500.181887,38.4470424 500.345695,38.451742 500.5093,38.4559651 L500.999936,38.4418697 L500.999979,38.4672112 C501.548906,38.4781965 502.095515,38.4837532 502.639736,38.4837532 C549.830858,38.4837532 597.013812,1.5187851e-13 645.023803,1.5187851e-13 C693.033794,1.52322599e-13 743.703575,31.9675209 781.181611,31.9675209 C818.659647,31.9675209 871.537923,1.96344638 918.123572,1.96344638 C919.253873,1.96344638 920.379637,1.97410074 921.500863,1.99540948 C922.621287,1.97409687 923.746847,1.96344638 924.876943,1.96344638 C971.462592,1.96344638 1024.34087,31.9675209 1061.8189,31.9675209 C1099.29694,31.9675209 1149.96672,1.52322599e-13 1197.97671,1.5187851e-13 C1245.9867,1.5187851e-13 1293.16966,38.4837532 1340.36078,38.4837532 C1340.905,38.4837532 1341.45161,38.4781965 1342.00054,38.4672112 L1342.00054,38.4672112 L1342.00058,38.4418697 L1342.49121,38.4559651 C1342.65482,38.451742 1342.81863,38.4470424 1342.98264,38.4418697 L1342.98264,38.4418697 L1342.98368,38.4672313 C1343.53227,38.4782032 1344.07855,38.4837532 1344.62244,38.4837532 C1391.81356,38.4837532 1438.99651,-7.54951657e-14 1487.0065,-7.54951657e-14 Z'
            fill={fillColor}
          ></path>
        </g>
      </svg>
    </div>
  )
}

Wave.propTypes = {
  fillColor: PropTypes.bool,
}

Wave.defaultProps = {
  fillColor: false,
}

export default Wave
