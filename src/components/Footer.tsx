const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground">
          Made with curiosity and a love for adventure
        </p>
        <p className="text-sm text-muted-foreground/70 mt-2">
          © {new Date().getFullYear()} • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
