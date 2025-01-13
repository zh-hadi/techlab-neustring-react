import React from 'react';
import IphoneIcon from '../assets/apple-icon.svg'
import PhoneLogo from '../assets/phone_logo.svg'

const Contact = () => {
  return (
    <div
      className="Footer"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        background: 'linear-gradient(90deg, #EFEFBB 0%, #D4D3DD 100%)',
      }}
    >
      {/* Features Section */}
      <div
        className="Features"
        style={{
          width: 1601,
          height: 812,
          left: 0,
          top: 0,
          position: 'absolute',
        }}
      >
        <div
          className="Bg"
          style={{
            width: 1601,
            height: 812,
            left: 0,
            top: 0,
            position: 'absolute',
          }}
        >
          <div
            className="Rectangle2"
            style={{
              width: 1601,
              height: 812,
              position: 'absolute',
              background: 'linear-gradient(90deg, #43C6AC 0%, #F8FFAE 100%)',
            }}
          />
          {/* Navigation Links */}
          <div
            className="Group1000005688"
            style={{
              width: 91,
              height: 117,
              left: 44,
              top: 347,
              position: 'absolute',
            }}
          >
            <div
              className="Frame1000005688"
              style={{
                width: 86.51,
                height: 117,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 8,
                display: 'inline-flex',
                position: 'absolute',
              }}
            >
              {['Home', 'About', 'Solutions', 'Community', 'Contact Us'].map(
                (item, index) => (
                  <div
                    key={index}
                    style={{
                      width: 110,
                      color: 'white',
                      fontSize: 14,
                      fontFamily: 'Montserrat',
                      fontWeight: item === 'Contact Us' ? '700' : '300',
                      lineHeight: '17.12px',
                      wordWrap: 'break-word',
                    }}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {/* Content Section */}
        <div
          className="Content"
          style={{
            width: 438,
            height: 229,
            left: 157,
            top: 271,
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: 16,
            display: 'inline-flex',
          }}
        >
          <h1
            style={{
              width: 438,
              textAlign: 'right',
              color: '#0E2C46',
              fontSize: 38,
              fontFamily: 'Montserrat',
              fontWeight: '700',
              lineHeight: '43px',
            }}
          >
            Connect with NeuString
          </h1>
          <p
            style={{
              width: 246,
              textAlign: 'right',
              color: '#0F314F',
              fontSize: 16,
              fontFamily: 'Open Sans',
              fontWeight: '400',
              lineHeight: '21px',
            }}
          >
            Follow us for the latest insights, tips, and industry news.
          </p>
          {/* Button */}
          <div
            className="Button"
            style={{
              width: 216,
              height: 60,
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background:
                  'linear-gradient(108deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.07) 100%)',
                borderRadius: 20,
                border: '1px #82BC34 solid',
                backdropFilter: 'blur(20px)',
                position: 'absolute',
              }}
            />
            <span
              style={{
                position: 'absolute',
                textAlign: 'center',
                color: '#0E2C46',
                fontSize: 20,
                fontFamily: 'Circular Std',
                fontWeight: '450',
                lineHeight: '18px',
                width: '100%',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              Follow NeuString
            </span>
          </div>
        </div>
      </div>
      {/* Mobile App Section */}
      <div
        className="Group1000006228"
        style={{
          width: 895,
          height: 756,
          left: 352,
          top: 42,
          position: 'absolute',
        }}
      >
        <img
          src={IphoneIcon}
          alt="Placeholder"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
        <div
          style={{
            width: 241.15,
            height: 488.23,
            left: 328.42,
            top: 127.25,
            position: 'absolute',
            background: '#D9D9D9',
          }}
        >
          <img
            src={PhoneLogo}
            alt="Placeholder"
            style={{
              width: 267,
              height: 527,
              position: 'absolute',
              left: '-13.42px',
              top: '-64.25px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;