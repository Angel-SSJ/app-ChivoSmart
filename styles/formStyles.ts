import { StyleSheet } from 'react-native';
import {Tcolors} from "@/constants/Colors";
import {fontStyles} from "@/styles/fontStyles";



export const formStyles= (colors:Tcolors)=> StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: colors.background
    },
    form: {
        width: '100%',
        maxWidth: 500,
        padding: 20,
        backgroundColor: colors.background,
        borderRadius: 8,
    },
    //INPUT
    inputDropdownContainer:{
        position:'relative',
        flexShrink: 0,
        width: 362,
        borderStyle: "solid",
        backgroundColor: colors.white,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 10,
        padding: 12,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 5
    },
    inputDropdownText: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        display: "flex",
        alignItems: "flex-start",
        columnGap: 0
    },
    inputText: {
        position: "relative",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        textAlign: "left",
        color:colors.whiteDiluided,
        fontFamily:fontStyles.bodyTextXs.fontFamily,
        fontSize: fontStyles.bodyTextXs.fontSize,
        lineHeight: 19.6,
    },

    input: {
        width: '100%',
        height: 50,
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 15,
        fontSize: fontStyles.bodyTextXs.fontSize,
        backgroundColor: colors.white,
        fontFamily:fontStyles.bodyTextXs.fontFamily
    },
    inputError: {
        borderColor: colors.red,
    },
    label: {
        fontSize: fontStyles.primaryTitle.fontSize,
        color: colors.primaryText,
        marginBottom: 5,
        fontFamily:fontStyles.primaryTitle.fontFamily
    },
    title_one:{
        fontSize:40,
        color:"#F7F7F1",
        textAlign:'center',
        justifyContent:'center',
        padding:30,
        fontWeight:'condensedBold',
    },
    labelBrand:{
        fontSize:40,
        color:colors.purple,
        textAlign:'center',
        justifyContent:'center',
        padding:40,


    },
    button: {
        backgroundColor:colors.tintButton,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: colors.primaryText,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorText: {
        color: colors.red,
        fontSize: 14,
        marginBottom: 10,
    },







    linkText: {
        position:'relative',
        flexShrink:0,
        textAlign: 'center',
        color: colors.purple,
        fontFamily:fontStyles.bodyTextRegular.fontFamily,
        fontSize:fontStyles.bodyTextRegular.fontSize,
        lineHeight:23.6,
        marginTop: 15,
    },

//BUTTONS
    //button primary

    buttonPrimaryContainer:{
        position:'relative',
        flexShrink:0,
        width:"auto",
        backgroundColor:colors.primaryButton,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        columnGap:8,
        paddingHorizontal:52,
        paddingVertical:12,
        borderRadius:10,
    },
    buttonPrimaryText:{
        position:'relative',
        flexShrink:0,
        textAlign:'center',
        color:colors.primaryText,
        fontFamily: fontStyles.bodytextM.fontFamily,
        fontSize:fontStyles.bodytextM.fontSize,
        lineHeight:24,
    },
    //button second

    buttonSecondaryContainer:{
      position:'relative',
      flexShrink:0,
      width:190,
      backgroundColor:colors.secondaryButton,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      columnGap:0,
      paddingHorizontal:52,
      paddingVertical:12,
      borderRadius:10,
    },
    buttonSecondaryText:{
        position:'relative',
        flexShrink:0,
        textAlign:'center',
        color:colors.primaryText,
        fontFamily:fontStyles.bodytextM.fontFamily,
        fontSize:fontStyles.bodytextM.fontSize,
        lineHeight:23.76,
    },

    //button third
    buttonThirdContainer:{
        position:'relative',
        flexShrink:0,
        height:92,
        width:92,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        rowGap:0,
    },
    buttonThirdRectangle:{
      position:'absolute',
      flexShrink:0,
      right:0,
      left:0,
      height:92,
      backgroundColor:colors.lightBrown,
      borderRadius:10,
    },
    buttonThirdText:{
        position:'absolute',
        flexShrink:0,
        top:55,
        right:15,
        bottom:14,
        left:14,
        textAlign:'center',
        color:colors.primaryText,
        fontFamily:fontStyles.bodyTextXs.fontFamily,
        fontSize:fontStyles.bodyTextXs.fontSize,
        lineHeight:19.5
    },
    buttonVectorContainer:{
      position:'absolute',
      flexShrink:0,
      top:25,
      height:25,
      left:33,
      right:33,
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      rowGap:0,
    },
    buttonVector:{
        position:'absolute',
        flexShrink:0,
        top:7,
        right:6,
        bottom:7,
        left:6,
        overflow:'visible'
    },


    // ICON CHECK:D
    iconContainer:{
        position: "relative",
        flexShrink: 0,
        height: 200,
        width: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    icon:{
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "visible"
    },
    vectorContainer:{
        position: "absolute",
        flexShrink: 0,
        top: 45,
        bottom: 45,
        left: 45,
        right: 45,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    vector:{
        position: "absolute",
        flexShrink: 0,
        top: 22,
        right: 11,
        bottom: 22,
        left: 11,
        overflow: "visible"
    },


    // NAVBAR

    navBarContainer:{
        position: "absolute",
        flexShrink: 0,
        width: 430,
        height: 75,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderStyle: "solid",
        backgroundColor:colors.blackDiluided,
        borderWidth: 1,
        borderColor: colors.blackDiluided,
    },
    navBarVectorContainer:{
        position: "absolute",
        flexShrink: 0,
        top: 23,
        height: 30,
        left: 159,
        width: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap: 0
    },
    navBarVector:{
        position: "absolute",
        flexShrink: 0,
        top: 4,
        right: 4,
        bottom: 4,
        left: 4,
        overflow: "visible"
    },
    navBarVectorPress:{
        position: "absolute",
        flexShrink: 0,
        height: 60,
        width: 60,
        borderStyle: "solid",
        backgroundColor: colors.purple,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 8,
        paddingHorizontal: 52,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: colors.purple,
        borderRadius: 10
    },
    navBarVectorNoPress:{
        position: "absolute",
        flexShrink: 0,
        height: 60,
        width: 60,
        borderStyle: "solid",
        backgroundColor:colors.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 8,
        paddingHorizontal: 52,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: colors.background,
        borderRadius: 10
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
});
