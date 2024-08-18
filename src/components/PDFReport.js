import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Link, Font } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MastercardLogo from '../Mastercard Symbol.png';
import MastercardFont from '../fonts/MarkForMCNarrowW00-Medium.ttf';
import MastercardFontRegular from '../fonts/MarkForMCNarrowW00-Light.ttf';
import MastercardFontBold from '../fonts/MarkForMCNarrowW00-Bold.ttf';

Font.register({
  family: 'Mastercard Bold',
  src: MastercardFontBold,
});

Font.register({
  family: 'Mastercard',
  src: MastercardFont,
});

Font.register({
  family: 'Mastercard Regular',
  src: MastercardFontRegular,
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#141414',
    padding: 30,
    color: '#FFFFFF',
  },
  section: {
    padding: 10,
  },
  header: {
    fontSize: 32,
    marginBottom: 18,
    color: '#F79E1B',
    fontFamily: 'Mastercard Bold',
  },
  subheader: {
    fontSize: 20,
    marginBottom: 10,
    opacity: 0.9,
    color: '#F79E1B',
    fontFamily: 'Mastercard',
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 0,
    lineHeight: 2,
    fontFamily: 'Mastercard Regular',
  },
  list: {
    marginLeft: 0,
    fontFamily: 'Mastercard Regular',
    lineHeight: 2,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
    lineHeight: 2,
    fontFamily: 'Mastercard Regular',
  },
  logo: {
    width: 100,
    marginBottom: 15,
  },
  Link: {
    color: '#FFFFFF',
    marginTop: 12,
    backgroundColor: '#141414',
    opacity: 0.9,
    textDecoration: 'none',
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid #F79E1B',
    borderRadius: 5,
    fontFamily: 'Mastercard',
    width: 200,
    padding: 10,
    fontSize: 14
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 20,
    fontSize: 10,
    fontFamily: 'Mastercard Regular',
  },
});

const PDFReport = ({ recommendations }) => {
  console.log("Recommendations in PDFReport:", recommendations);

  if (!recommendations || !recommendations.summary) {
    console.error("Invalid recommendations data");
    return <div>Error: Invalid data received</div>;
  }

  const report = recommendations.summary;

  const PDFDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={MastercardLogo} />
        <View style={styles.section}>
          <Text style={styles.header}>AI Adoption Assessment Report</Text>
          <Text style={styles.subheader}>Adoption Level: {report.maturityLevel}</Text>
          <Text style={styles.paragraph}>{report.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Strengths:</Text>
          <View style={styles.list}>
            {report.strengths.length > 0 ? (
              report.strengths.map((strength, index) => (
                <Text key={index} style={styles.listItem}>•  {strength}</Text>
              ))
            ) : (
              <Text style={styles.listItem}>• No specific strengths identified at this stage</Text>
            )}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Areas for Improvement:</Text>
          <View style={styles.list}>
            {report.weaknesses.map((weakness, index) => (
              <Text key={index} style={styles.listItem}>•  {weakness}</Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Detailed Recommendations:</Text>
          <Text style={styles.paragraph}>{report.detailedRecommendations}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Specific Actionable Recommendations:</Text>
          <View style={styles.list}>
            {report.bulletRecommendations.map((recommendation, index) => (
              <Text key={index} style={styles.listItem}>•  {recommendation}</Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.paragraph}>For more detailed insights, learn more from the experts:</Text>
          <Link style={styles.Link} src="https://www.mastercardservices.com/en/advisors/ai-advanced-analytics">Connect with AI consultants</Link>
        </View>
        <Text style={styles.footer}>
          This is a prototype of the project for Mastercard internship program developed by Nazym Zhiyengaliyeva
        </Text>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFDownloadLink document={PDFDocument} fileName="ai_adoption_assessment.pdf">
        {({ blob, url, loading, error }) => (
          <button className="download-report-button" disabled={loading}>
            {loading ? 'Generating PDF...' : error ? 'Error generating PDF' : 'Download PDF Report'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFReport;