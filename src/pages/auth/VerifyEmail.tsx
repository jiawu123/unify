const VerifyEmail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Check your email
        </h2>
        <p className="text-gray-600">
          We've sent you a verification link. Please check your email and click the link to verify your account.
        </p>
        <p className="text-sm text-gray-500">
          Make sure to check your spam folder if you don't see the email in your inbox.
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;