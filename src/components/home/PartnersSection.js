import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import certik from "../../assets/images/partners/certik.svg";
import binancechain from "../../assets/images/partners/binancechain.svg";
import coinmarketcap from "../../assets/images/partners/coinmarketcap.svg";
import fairyproof from "../../assets/images/partners/fairyproof.png";

const partners = [
  { label: "binancechain", src: binancechain },
  { label: "coinmarketcap", src: coinmarketcap },
  { label: "certik", src: certik },
  { label: "fairyproof", src: fairyproof, width: 150 },
];

const PartnersSection = () => {
  return (
    <Container
      sx={{
        pb: { xs: 3, sm: 4, md: 5 },
        mb: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 3, md: 5 }, // Add horizontal padding for smaller screens
      }}
      className="fadeInUp"
    >
      <Grid
        container
        rowSpacing={4}
        columnSpacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {partners.map((partner, i) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            key={i}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center", // Center the content for all screen sizes
            }}
          >
            <a
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              style={{
                filter: "grayscale(100%)",
                display: "block",
                maxWidth: "100%", // Ensure the link doesn't exceed the container's width
              }}
            >
              <img
                src={partner.src}
                alt={partner.label}
                style={{
                  width: "100%", // Make the image responsive to container size
                  maxWidth: partner.width || 160, // Set a max width based on the partner object or fallback
                  objectFit: "contain", // Make sure the image is fully contained inside the container
                  height: "auto", // Maintain aspect ratio
                }}
              />
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PartnersSection;
