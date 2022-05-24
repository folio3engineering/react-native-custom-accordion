import {StyleSheet} from 'react-native';
// import commonColor from '../../themes/variables/commonColor';

const commonColor = {
  borborderColor: '#d2d2d2',
  modalButton: '#007AFF',
};
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  accordiaButton: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    // margin: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: commonColor.borderColor,
  },

  avtiveAccordianButton: {
    borderBottomWidth: 1,
    borderBottomColor: commonColor.modalButton,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  accordianButtonText: {
    color: commonColor.modalButton,
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
  },
  activeIcon: {
    height: 12,
    width: 15,
  },
  nonActiveIcon: {
    height: 15,
    width: 12,
  },
});
