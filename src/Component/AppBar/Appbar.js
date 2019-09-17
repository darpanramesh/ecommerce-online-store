import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../Images/logo.png'
import MoreIcon from '@material-ui/icons/MoreVert';
import { IoMdCart, IoIosHeart } from "react-icons/io";
import Popup from "reactjs-popup";
import ButtonPage from '../Button/button'
import history from '../../history'
import './Appbar.css'


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 100,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));



export default function PrimarySearchAppBar(props) {

  var value = props.mycart;
  console.log(value);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    history.push("/AdminLogin",{value:props.mycart})
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <IoMdCart />
          </Badge>
        </IconButton>
        <p>My Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <IoIosHeart />
          </Badge>
        </IconButton>
        <p>Wish List</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
    
  );

  return (
    <div className={classes.grow}>
      <AppBar style={{ background: "#878a8f" }} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={logo} width="50" height="50" />
            Online Shoes
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>
            <span onClick={()=>history.push('/',{value:value})} style={{ color: "#fff", cursor:'pointer' }}>Home</span>
            <span onClick={()=>history.push('/shop',{value:value})} style={{ color: "#fff", marginLeft: "5%",cursor:'pointer' }}>Shop</span>
            <span onClick={()=>history.push('/services',{value:value})} style={{ color: "#fff", marginLeft: "5%",cursor:'pointer' }}>Services</span>
            <span onClick={()=>history.push('/about',{value:value})} style={{ color: "#fff", marginLeft: "5%",cursor:'pointer' }}>About</span>
            <span onClick={()=>history.push('/contact',{value:value})} style={{ color: "#fff", marginLeft: "5%",cursor:'pointer' }}>Contact</span>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={value ? value.length : 0} color="secondary">
                <Popup
                  className="popup-content"
                  trigger={<IoMdCart />}
                  position="bottom right"
                  on="hover"
                >
                  <div>
                      {value.map((val, i) => 
                        <div style={{paddingTop:'2px',paddingBottom:'2px',display: 'flex',borderBottom:'1px solid #878a8f'}}>
                          <table>
                            <td className="td-width">
                            <img src={val.img} width="50" height='50' />
                            </td>
                            <td className="td-width">
                            <span style={{ color: "black", marginLeft: "8px", }}>{val.name}</span>
                            </td>
                            <td className="td-width">
                            <span style={{ color: "black", marginLeft: "12px",color:'#9C27B0' }}>{val.quantity}</span>
                            </td>
                            <td className="td-width">
                            <span style={{ color: "black", marginLeft: "12px", color: "#878a8f" }}>Rs:{val.price}</span>
                            </td>
                            <td className="td-width">
                          <span onClick={()=>{
                            value.splice(i,1);
                            localStorage.setItem('cartDetail',JSON.stringify(value))
                          }} style={{ color: "black", marginLeft: "20px", color: "red", fontWeight:"bold" }}>X</span>
                            </td>
                          </table>
                        </div>
                      )}
                    <div >
                    <ButtonPage img={<IoMdCart />} value={value} name="View Cart" />
                    </div>
                  </div>
                </Popup>
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <IoIosHeart />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}