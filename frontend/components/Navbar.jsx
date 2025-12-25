import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks.js';
import { logout } from '../store/authSlice.js';
import { setSearchTerm } from '../store/storiesSlice.js';
import toast from 'react-hot-toast';
import SearchBar from './SearchBar.jsx';

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
    setIsMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(localSearch));
    setIsMenuOpen(false);
  };

  const showSearch = location.pathname === '/vault';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={user ? "/vault" : "/"} className="flex items-center group">
              <i className="fas fa-book-open text-brand-600 text-2xl mr-2 group-hover:text-brand-700 transition-colors"></i>
              <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">Memory Vault</span>
            </Link>
          </div>

          {/* Desktop Search */}
          {user && showSearch && (
            <div className="hidden md:flex flex-1 items-center justify-center px-8">
              <div className="w-full max-w-md">
                <SearchBar 
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  onSubmit={handleSearchSubmit}
                />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>

                <div className="relative">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="p-2 rounded-md text-gray-600 hover:text-brand-600 hover:bg-gray-100 focus:outline-none transition-colors"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>

                    {/* Mobile Dropdown */}
                    {isMenuOpen && (
                        <>
                            <div className="fixed inset-0 z-10 cursor-default" onClick={() => setIsMenuOpen(false)}></div>
                            <div className="absolute right-0 mt-3 w-72 bg-white rounded-lg shadow-xl py-2 z-20 border border-gray-100 animate-fade-in origin-top-right">
                                
                                {showSearch && (
                                    <div className="md:hidden px-4 pb-3 pt-2 border-b border-gray-100 mb-2">
                                        <SearchBar 
                                          value={localSearch}
                                          onChange={(e) => setLocalSearch(e.target.value)}
                                          onSubmit={handleSearchSubmit}
                                        />
                                    </div>
                                )}

                                <Link to="/profile" className="px-4 py-3 flex items-center hover:bg-brand-50 border-b border-gray-100 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                    {user.profilePicture ? (
                                        <img src={user.profilePicture} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-gray-200 mr-3" />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mr-3">
                                            <i className="fas fa-user text-lg"></i>
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-gray-800 truncate">{user.username}</p>
                                        <p className="text-xs text-brand-600 font-medium">View Profile</p>
                                    </div>
                                </Link>

                                <div className="py-1">
                                    <Link to="/favorites" className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-brand-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                                        <div className="w-8 text-center"><i className="fas fa-heart text-gray-400"></i></div>
                                        <span className="font-medium">My Favorites</span>
                                    </Link>
                                    
                                </div>

                                <div className="border-t border-gray-100 mt-1 pt-1">
                                    <button onClick={handleLogout} className="w-full text-left flex items-center px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors">
                                        <div className="w-8 text-center"><i className="fas fa-sign-out-alt"></i></div>
                                        <span className="font-medium">Sign Out</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
              </>
            ) : null
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;