import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Shield, Clock, CheckCircle, Star } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { BackButton } from '../components/BackButton';

export function Register() {
  const navigate = useNavigate();
  const register = useAuthStore(state => state.register);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    general: ''
  });

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
      general: ''
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await register(formData.email, formData.password);
      navigate('/dashboard');
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        general: 'Registration failed. Please try again.'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A90E2] to-[#357ABD] flex flex-col">
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Create Your Anonymous Email Account
            </h1>
            <p className="text-gray-600">
              Get instant access to secure, disposable email addresses that protect your privacy
            </p>
          </div>

          {errors.general && (
            <div className="mb-6 bg-red-50 border-l-4 border-[#FF6F61] p-4 rounded">
              <p className="text-sm text-[#FF6F61]">{errors.general}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`pl-10 w-full rounded-lg border ${
                    errors.email ? 'border-[#FF6F61]' : 'border-gray-300'
                  } px-4 py-2 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-[#FF6F61]">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`pl-10 w-full rounded-lg border ${
                    errors.password ? 'border-[#FF6F61]' : 'border-gray-300'
                  } px-4 py-2 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all`}
                  placeholder="Create a secure password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-[#FF6F61]">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={`pl-10 w-full rounded-lg border ${
                    errors.confirmPassword ? 'border-[#FF6F61]' : 'border-gray-300'
                  } px-4 py-2 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-[#FF6F61]">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-[#4A90E2] text-white rounded-lg px-6 py-3 hover:bg-[#357ABD] transition-colors flex items-center justify-center ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Create Your Free Account'
              )}
            </button>
          </form>

          {/* Key Features */}
          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Why Choose Our Temporary Email Service?
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-[#4A90E2] mr-2 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Privacy Protection</h3>
                  <p className="text-sm text-gray-600">Anonymous email addresses with no personal data required</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-[#4A90E2] mr-2 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Extended Validity</h3>
                  <p className="text-sm text-gray-600">2+ months email validity - longer than other services</p>
                </div>
              </div>
              <div className="flex items-start">
                <Star className="w-5 h-5 text-[#4A90E2] mr-2 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Premium Features</h3>
                  <p className="text-sm text-gray-600">Spam protection, custom domains, and unlimited addresses</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[#4A90E2] hover:text-[#357ABD] font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}